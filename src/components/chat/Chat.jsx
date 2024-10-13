import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");

	const endRef = useRef(null);

	useEffect(() => {
		endRef.current.scrollIntoView({ behavior: "smooth" });
	}
	, []);
	const handleEmojiClick = event => {
		setText(prevValue => prevValue + event.emoji);
		setOpen(false);
	};
	console.log(text);

	return (
		<div className='chat'>
			<div className='top'>
				<div className='user'>
					<img
						src='./avatar.png'
						alt=''
					/>
					<div className='texts'>
						<span>Leo Pants</span>
						<p>Lorem ipsum!</p>
					</div>
				</div>
				<div className='icons'>
					<img
						src='./phone.png'
						alt=''
					/>
					<img
						src='./video.png'
						alt=''
					/>
					<img
						src='./info.png'
						alt=''
					/>
				</div>
			</div>
			<div className='center'>
				<div className='message own'>
									<div className='texts'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
							laudantium repellendus, porro odit fugiat animi, ipsam saepe ad
							soluta pariatur mollitia harum suscipit hic quo, amet
							exercitationem repudiandae culpa? Reprehenderit!
						</p>
						<span>1min ago</span>
					</div>
				</div>
				<div className='message'>
					<img
						src='./avatar.png'
						alt=''
					/>
					<div className='texts'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
							laudantium repellendus, porro odit fugiat animi, ipsam saepe ad
							soluta pariatur mollitia harum suscipit hic quo, amet
							exercitationem repudiandae culpa? Reprehenderit!
						</p>
						<span>1min ago</span>
					</div>
				</div>{" "}
				<div className='message own'>
									<div className='texts'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
							laudantium repellendus, porro odit fugiat animi, ipsam saepe ad
							soluta pariatur mollitia harum suscipit hic quo, amet
							exercitationem repudiandae culpa? Reprehenderit!
						</p>
						<span>1min ago</span>
					</div>
				</div>
				<div className='message'>
					<img
						src='./avatar.png'
						alt=''
					/>
					<div className='texts'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
							laudantium repellendus, porro odit fugiat animi, ipsam saepe ad
							soluta pariatur mollitia harum suscipit hic quo, amet
							exercitationem repudiandae culpa? Reprehenderit!
						</p>
						<span>1min ago</span>
					</div>
				</div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium repellendus, porro odit fugiat animi, ipsam saepe ad soluta pariatur mollitia harum suscipit hic quo, amet exercitationem repudiandae culpa? Reprehenderit!</p>
          <span>
            1min ago
          </span>
          </div>
          
          
        </div>
        <div className="message own">
          <img src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/124038319_3532794260099503_7380796377761171972_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFpYRQ1RK-MTfW3PaOSfUKjvjtzWCdgY8C-O3NYJ2BjwFsQTONBnn51Ximdsm43ulU4s-0ClaciDQaYLwOlz-Aa&_nc_ohc=OESN1ZQa-GoQ7kNvgHA5x8H&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=AVjHDNUfiAr3ANgJr30m3Rq&oh=00_AYArGDDcC3iVEBfrotpy4iKnoGMl4nPQm9reyL-I2EZXpQ&oe=671E1988" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium repellendus, porro odit fugiat animi, ipsam saepe ad soluta pariatur mollitia harum suscipit hic quo, amet exercitationem repudiandae culpa? Reprehenderit!</p>
          <span>
            1min ago
          </span>
          </div>
          
          <div ref={endRef}></div>
        </div>
			</div>
			<div className='bottom'>
				<div className='icons'>
					<img
						src='./img.png'
						alt=''
					/>
					<img
						src='./camera.png'
						alt=''
					/>
					<img
						src='./mic.png'
						alt=''
					/>
				</div>
				<input
					type='text'
					placeholder='Type a message...'
					value={text}
					onChange={event => setText(event.target.value)}
				/>
				<div className='emoji'>
					<img
						src='./emoji.png'
						alt=''
						onClick={() => setOpen(prevState => !prevState)}
					/>
					<div className='picker'>
						<EmojiPicker
							open={open}
							onEmojiClick={handleEmojiClick}
						/>
					</div>
				</div>
				<button className='sendButton'>Send</button>
			</div>
		</div>
	);
};

export default Chat;
