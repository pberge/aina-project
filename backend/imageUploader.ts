
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
            if (err) { console.warn(err); }
        });

        return url
    }
 
}
 
export default ImageUploader;