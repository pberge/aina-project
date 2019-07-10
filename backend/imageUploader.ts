
const env = process.env.NODE_ENV || 'development'

class ImageUploader {
 
    public cloudinary: any  = require('cloudinary').v2
    constructor() {
        this.cloudinary.config({
            cloud_name: 'ainacloud', 
            api_key: '754425415547111', 
            api_secret: 'um4BPLeOzzB_0d6HkZ1MSRmtGsk'
        })
    }
    
    public async upload(imageUri: string): Promise<string> {
        let url: string = ""

        await this.cloudinary.uploader
        .upload(imageUri, { tags: 'basic_sample' })
        .then(function (image: any) {
            url = image.url
        })
        .catch(function (err: any) {
            if (err) { console.warn(err) }
        });

        return url
    }

    public async delete(imageUri: string): Promise<void> {

        let splited: string[] = imageUri.split("/") //get image name
        let imageName: string = splited[splited.length - 1].split(".")[0] //remove extension

        await this.cloudinary.uploader
        .destroy(imageName)
        .catch((err:any) => console.log(err))
    }
 
}
 
export default ImageUploader