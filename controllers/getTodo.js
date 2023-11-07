const Todo = require('../models/Todo');


exports.getTodo = async(req , res) => {
    try{
        const data = await Todo.find({})
        console.log(data)
        res.status(200).json(
            {
                success:true,
                data:data,
                message:'Fetched successfully'
            }
        )
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}



exports.getByIdTodo = async(req , res) => {
    try{
        const id = req.params.id;
        const data = await Todo.findById({_id:id});
        if(!data){
            return res.status(404).json({
                success:false,
                message:"NO data found",
            })
        }
        console.log(data)
        res.status(200).json(
            {
                success:true,
                data:data,
                message:'Fetched successfully'
            }
        )
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}