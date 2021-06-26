const fs = require('fs-extra');
const R = require('ramda');

const pathinit = './initial_folder';
const newpath = './sorted_folder';

const createfolder = x => {fs.ensureDir(newpath + "/" + R.nth(1, x)), fs.ensureDir(newpath);}

const movefiles = ([nameofile, extension]) => {
  fs.rename(nameofile, `${newpath}/${extension}/${fs.readdirSync(newpath + "/" + extension ).length}.${extension}`, error => {
    if (error) {
      throw error;
    }
  }
  );
};

const addextension = x => [`${pathinit}/${x}`, R.nth(-1, x.split('.'))];

const main = async () => {
  const getfiles = fs.readdirSync(pathinit);

  const ZipFileName = R.map(addextension, getfiles);

  R.map(createfolder, ZipFileName);

  R.map(movefiles, ZipFileName);

  console.log('done');
};

main();
