
// declare global {
   declare namespace Express {
      export interface Request {
         file: any;
      }
   }
// }