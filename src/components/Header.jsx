function MyHeader() {
	return (
		<header>
			<nav className="nav-bar">
				<div className="flex items-center mx-4 gap-4">
					<img className="react-logo" src="/src/assets/react.svg"></img>
					<span className="text-xl font-bold text-[#06b6d4]">
						StartReacting
					</span>
				</div>
				<ul className="nav-list">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
export default MyHeader;
