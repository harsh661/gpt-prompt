import { Schema, model, models}from "mongoose"

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    tag: {
        type: String,
        required: [true, "Tags are required"]
    }
}, 
{ timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' }}
)


const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt