const { FuseBox, Sparky, QuantumPlugin, WebIndexPlugin } = require("fuse-box");
const { src, task, watch, context, fuse } = require("fuse-box/sparky");
const { LESSPlugin, CSSPlugin, CSSResourcePlugin, TerserPlugin } = require("fuse-box");


context(class {
  getConfig() {
    const fuse = FuseBox.init({
      homeDir: "app",
      output: "dist/$name.js",
      plugins: [
        [
          LESSPlugin(),
          CSSResourcePlugin(),
          CSSPlugin(),
        ],
        WebIndexPlugin({
          template: "assets/index.html"
        }),
        this.isProduction && QuantumPlugin({
          bakeApiIntoBundle: "app",
          css: { clean: true },
          extendServerImport: true
        }),
      ]
    });

    const app = fuse.bundle("app")
      .instructions("> index.tsx");

    if (!this.isProduction) {
      fuse.dev();
      app.watch().hmr()
    }

    return fuse;
  }

  async runWorker() {
    const worker = FuseBox.init({
      homeDir: "service-worker",
      output: "dist/$name.js",
      sourceMaps: !this.isProduction,
      plugins: [
        this.isProduction && QuantumPlugin({
          // these options are essentials
          // it should be an isolated 1 bundle
          containedAPI: true,
          bakeApiIntoBundle: "service-worker"
        })
      ]
    });
    // workers can't have HMR
    // should contain only 1 bundle (no vendors allowed)
    // Cannot contain CSS Related plugins
    const workerBundle = worker.bundle("service-worker")
      .instructions("> index.ts");
    if (!this.isProduction) {
      workerBundle.watch()
    }
    await worker.run();
  }

  async copyImages() {
    await src("images/**.*", { base: "assets" }).dest("dist/").exec();
  }

  async copyWebmanifest() {
    await src("manifest.webmanifest", { base: "assets" }).dest("dist/").exec();
  }
});


task("default", async context => {
  context.copyImages();
  context.copyWebmanifest();
  context.runWorker();
  const fuse = context.getConfig();
  await fuse.run();
});

task("dist", async context => {
  context.isProduction = true;
  context.copyImages();
  context.copyWebmanifest();
  context.runWorker();
  const fuse = context.getConfig();
  await fuse.run();
});
