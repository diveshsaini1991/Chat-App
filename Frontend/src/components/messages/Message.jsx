import React from 'react'

const Message = () => {
    return (
		<div className={`chat chat-end`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={"https://imgs.search.brave.com/cLEE9t8ycmT1qrG3k4pWR72NtXY7zsz_uPyhdQutvLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHMtZnMvaHViZnMv/aG93LXRvLW1ha2Ut/cGljdHVyZS1pbnRv/LWxpbmtfMy0xLndl/YnA_d2lkdGg9NTAw/JmhlaWdodD00OTkm/bmFtZT1ob3ctdG8t/bWFrZS1waWN0dXJl/LWludG8tbGlua18z/LTEud2VicA"} />
				</div>
			</div>
			<div className={`chat-bubble text-white  pb-2`}>hi how are you</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:35</div>
		</div>
	);
};
export default Message;