const cloudinary = require("../database/cloudinary");
const data=require("../database/model/newcars.js")
 
const newCars={
  // view all products





  //delete new cars 
  deleteNewCar:async(req,res)=>{
     const {id}=req.params;
     try{
        const remove = await data.destrory({where:{id}});
        res.status(201);json(remove);
     }
       catch(error){
        res.status(500).json({error:"error"})
    }
  },
   //add a car 

    addNewCar:async(req,res)=>{

      const {
          brand,
          price,
          category,
          color,
          year,
          image ,
          mileage,
          model,
          transmition,
          hp,
          carburant,
          quantity,
          rate
          }=req.body;

     try{
        const ima= await cloudinary.uploader
        .upload(image,{
             imsource:"image"
        });
      const add = await data.create({

        brand,
        price,
        category,
        color,
        year,
        image :ima.secure_url ,
        mileage,
        model,
        transmition,
        hp,
        carburant,
        quantity,
        rate

      });
      res.status(201).json(add)
    }
    catch(error ){
     
        res.status(500).json({errror:"error"})

    }

},

//update Newcar  

updateNewCar: async(req,res)=>{
    const {id}=req.params ;
  

    const {
       
        price,
        category,
        color,
        year,
        image ,
        mileage,
        model,
        transmition,
        hp,
        carburant,
        quantity,
        rate
        }=req.body;

        try{ 
            const updated= await data.findByPk(id);
            if(image!==updated.image){
             const ima= await cloudinary.uploader
             .upload(image,{
                imsource:"image"
             });
             image=ima.secure_url ;

            }
            await updated.save();
            res.status(201).json(updated);
        
        }
        catch(error){
            res.status(500).json({error:"error"})
        }



 
   },

};




module.exports=newCars  
    
