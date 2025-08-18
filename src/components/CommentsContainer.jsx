import React from 'react'

const commentsData = [
  {
    name: "Pinnacle Boy",
    text: "This is a comment",
    replies: [],
  },
  {
    name: "John Doe",
    text: "Really nice explanation, thanks!",
    replies: [
      {
        name: "Jane Smith",
        text: "I agree with you, very helpful content.",
        replies: [
          {
            name: "Mark Lee",
            text: "Totally! I learned a lot from this.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Alice Johnson",
    text: "Could you please explain more about closures?",
    replies: [],
  },
  {
    name: "Bob Martin",
    text: "Wow, this cleared my doubts!",
    replies: [
      {
        name: "Charlie Brown",
        text: "Same here, it was confusing before.",
        replies: [],
      },
    ],
  },
  {
    name: "Sophia White",
    text: "Looking forward to more such videos!",
    replies: [],
  },
];

const Comment = ({data})=>{
  const{name, text, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img 
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
        </div>
    </div>
  );
}


const CommentsList =({comments})=>{
  // Disclaimer : Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
    <div className='pl-5 border border-l-black ml-5'>
    <CommentsList comments={comment.replies}/>
    </div>
    </div>
  ));
 };




const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
