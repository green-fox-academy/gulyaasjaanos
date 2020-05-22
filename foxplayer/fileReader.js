"use strict";

const jsmediatags = require("jsmediatags");
const fs = require("fs");

const readMp3 = (file,response) => {
    jsmediatags.read(file, {
        onSuccess: (tag) =>{
            response({
                title: tag.tags.title,
                artist: tag.tags.artist,
                picture: tag.tags.picture || "N/A"
            });
        },
        onError: (error) => {
          response({error: `${error.type} ${error.info}`});
        }
      });
};

const dirMp3 = (dir) => {
    return new Promise( (resolve,reject) => {
        let mp3List = [];
        let index = 0;
        fs.readdirSync(dir+"/frontend/mp3/").forEach( (file,i,array) => {
            readMp3(dir+"/frontend/mp3/"+file, (metaData) => {
                if (metaData.error) reject(metaData);
                mp3List.push(metaData);
                mp3List[index].file = file;
                mp3List[index].track = i+1;
                index++;
                if (index === array.length) {
                    mp3List.sort( (a, b) => a.track - b.track );
                    resolve({"mp3List": mp3List});
                }
            });
        });
    });
};


module.exports = {
    dirMp3
}