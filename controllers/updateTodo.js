const Todo = require("../models/Todo");


exports.updateTodo = async(req, res) => {
    try{
        const {id} = req.params;
        console.log(id)
        const {title , description} = req.body;
        const data = await Todo.findByIdAndUpdate(
            {_id:id},
            {
                title,
                description,
                updatedAt:Date.now()
            },
        );
        console.log(data)
        res.status(200).json(
            {
                success:true,
                data:data,
                message:'Updated successfully'
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