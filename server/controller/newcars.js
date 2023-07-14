const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");
 
const Cars={
  // view all products

  getAll: async (req, res) => {
    try {
      const cars = await db.NewCars.findAll();
      res.json(cars);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },



  //delete new cars 
  deleteCar:async(req,res)=>{
     const {id}=req.params;
     try{
      await db.NewCars.destroy({ where: { id } });
      res.json({ message: "New Car deleted successfully" });
     }
       catch(error){
        console.log(error)
        res.status(500).json({error:"error"})
    }
  },
   //add a car 

    addCar:async(req,res)=>{

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
        
          rate
          }=req.body;

     try{
        // const ima= await cloudinary.uploader
        // .upload(image,{
        //      imsource:"image"
        // });
      const add = await db.NewCars.create({

        
        price,
        category,
        color,
        year,
        image ,
        // :ima.secure_url ,
        mileage,
        model,
        transmition,
        hp,
        carburant,
        rate

      });
      console.log(add)
      res.status(201).json(add)
    }
    catch(error ){
        console.log(error)
        res.status(500).json({error:"error"})

    }

},

//update Newcar  

updateCar: async(req,res)=>{
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
        rate
        }=req.body;

        try{ 
        const updated= await db.NewCars.findByPk(id);

        if (!updated) {
          return res.status(404).json({ error: " New car does not exist" });
        }
            // if(image!==updated.image){
            //  const ima= await cloudinary.uploader
            //  .upload(image,{
            //     imsource:"image"
            //  });
            //  image=ima.secure_url;
            // }
            updated.image=image
            updated.price=price;
            updated.category=category;
            updated.color=color;
            updated.year=year;
            updated.mileage=mileage;
            updated.model=model;
            updated.transmition=transmition;
            updated.hp=hp;
            updated.carburant=carburant;
            updated.rate=rate;


            await updated.save();
            res.status(201).json(updated);
        
        }
        catch(error){
          console.log(error)
            res.status(500).json({error:"error"})
        }

      

 
   },

};




module.exports=Cars  
    
