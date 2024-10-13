import "./detail.css";

const Detail = () => {
	return (
		<div className='detail'>
			<div className='user'>
				<img
					src='./avatar.png'
					alt=''
				/>
				<h2>Leo Pants</h2>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className='info'>
				<div className='option'>
					<div className='title'>
						<span>Chat Settings</span>
						<img
							src='./arrowUp.png'
							alt=''
						/>
					</div>
				</div>
				<div className='option'>
					<div className='title'>
						<span>Privacy and help</span>
						<img
							src='./arrowUp.png'
							alt=''
						/>
					</div>
				</div>
				<div className='option'>
					<div className='title'>
						<span>Shared Photos Settings</span>
						<img
							src='./arrowUp.png'
							alt=''
						/>
						<div className='photos'>
							<div className='photoItem'>
								<div className='photoDetail'>
									<img
										src='https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/124038319_3532794260099503_7380796377761171972_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFpYRQ1RK-MTfW3PaOSfUKjvjtzWCdgY8C-O3NYJ2BjwFsQTONBnn51Ximdsm43ulU4s-0ClaciDQaYLwOlz-Aa&_nc_ohc=OESN1ZQa-GoQ7kNvgHA5x8H&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=AVjHDNUfiAr3ANgJr30m3Rq&oh=00_AYArGDDcC3iVEBfrotpy4iKnoGMl4nPQm9reyL-I2EZXpQ&oe=671E1988'
										alt=''
									/>
									<span>photo_202_2.png</span>
								</div>
								<img
									src='download.png'
									alt=''
									className='icon'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='option'>
					<div className='title'>
						<span>Shared Files</span>
						<img
							src='./arrowUp.png'
							alt=''
							className='icon'
						/>
					</div>
				</div>
				<button>Block User</button>
				<button className="logout">logout</button>
			</div>
		</div>
	);
};

export default Detail;
