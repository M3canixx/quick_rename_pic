const fs = require('fs-extra');
const R = require('ramda');
pathinit = "./initial_folder";
const FileName = [];

const getfiles = fs.readdirSync(pathinit).forEach((file) => {
  FileName.push(pathinit + "/" + file);
});

const createfolder = (x) => fs.ensureDir(R.nth(1, x));


const movefiles = ([nameofile, extension]) => {
  fs.rename(nameofile, `./${extension}/${fs.readdirSync(extension).length}.${extension}`,(error) => {
      if (error) {
        throw error;
      }
    }
  );
};

const addextension = x => [x, R.nth(-1, x.split("."))]

const main = async () => {
  getfiles;

  const ZipFileName = R.map(addextension, FileName);

  R.map(createfolder, ZipFileName)

  R.map(movefiles, ZipFileName)

  console.log("done")
};

main();
