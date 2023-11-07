const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const data = await Todo.deleteOne({_id:id});
        console.log(data);
        res.status(200).json({
            success:true,
            data:data,
            message:"delete successfully"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

