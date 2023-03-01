<!-- ========== Header ========== -->
<link rel="stylesheet" type="text/css" href="assets/css/header/header.css">
<header id="header">
	<div class="top">
		<p id="timer"></p>
		<span>
			Nfts are in sale on march11 &#128293;
		</span>
	</div>
	<!-- Bottom -->
	<div class="bottom">
		<div class="container">
			<div class="row">
				<div class="col-7 col-lg-1 company">
					<i class="icon icon-menu-left menuToggle"></i>
					<div class="company-logo">
						<img class="img-fluid" src="./assets/img/logo.png">
					</div>
				</div>
				<div class="col-auto menu">
					<div class="menu-content">
						<div class="row">
							<nav class="col-auto">
								<ul class="row menu-ul">
									<li class="company-mobil">
										<div class="row">
											<div class="col mobile-logo-content">
												<img class="img-fluid mobile-logo" src="./assets/img/logo.png">
												<ul>
													<li>
														<a class="wallet" href="#">
															Wallet Connect
														</a>
													</li>
													<li>
														<a class="bill" target="_blank" rel="noreferrer">
															<span class="badge">
																6
															</span>
															<i class="icon icon-cloud"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</li>
									<li class="col-auto search-li search-li-mobile">
										<div class="searchbox">
											<form id="arama">
												<input type="text" placeholder="Search">
												<button type="submit" aria-label="Search">
													<i class=" icon icon-search"></i>
												</button>
											</form>
										</div>
									</li>
									<li class="col-auto menu-item dropMenu">
										<a class="toggle" href="#">
											<i class="icon icon-right2"></i>Home
										</a>
									</li>
									<li class="col-auto menu-item">
										<a class="toggle" href="#">
											<i class="icon icon-right2"></i>About
										</a>
									</li>
									<!--  -->
									<li class="col-auto menu-item dropMenu">
										<a class="toggle" href="#">
											<i class="icon icon-right2"></i>Exloper
											<i class="icon icon-down1 fs12"></i>
										</a>
										<ul class="sub">
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
											<li>
												test
											</li>
										</ul>
									</li>
									<!--  -->
									<li class="col-auto menu-item dropMenu">
										<a class="toggle" href="#">
											<i class="icon icon-right2"></i>Pages
										</a>
									</li>
									<!--  -->
									<li class="col-auto menu-item">
										<a class="toggle" href="#blogs">
											<i class="icon icon-right2"></i>Blog
										</a>
									</li>
									<li class="col-auto menu-item">
										<a class="toggle" href="#">
											<i class="icon icon-right2"></i>Contanct
										</a>
									</li>
									<!--  -->
									<li class="mobile-contact-li">
										<div class="col maps">
											<a class="radius" href="#">
												<i class="icon icon-marker"></i>
												Maps
											</a>
										</div>
									</li>
									<!--  -->
									<li class="mobile-contact-li">
										<ul>
											<li>
												<a href="tel:+5555555">
													<i class="icon icon-phone"></i>
													<span>
														5555555
													</span>
												</a>
											</li>
											<!--  -->
											<li>
												<a href="mailto:mailto:info@nfts.com">
													<i class="icon icon-mail1"></i>
													<span>
														info@nfts.com
													</span>
												</a>
											</li>
											<!--  -->
											<li>
												<a href="javascript:;">
													<i class="icon icon-marker"></i>
													<span>
														Lorem ipsum dolor sit amet consectetur.
													</span>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div class="col-7 col-lg">
					<div class="menu-left">
						<ul>
							<li class="search-li">
								<div class="searchbox">
									<form id="arama">
										<input type="text" placeholder="Search">
										<button type="submit" aria-label="Search">
											<i class=" icon icon-search"></i>
										</button>
									</form>
								</div>
							</li>
							<li>
								<a class="wallet" href="#">
									Wallet Connect
								</a>
							</li>
							<li>
								<a class="bill" target="_blank" rel="noreferrer">
									<span class="badge">
										6
									</span>
									<i class="icon icon-cloud"></i>
								</a>
							</li>
							<li>
							<li>
								<div>
									<input type="checkbox" class="checkbox" id="checkbox">
									<label for="checkbox" class="label">
										<i class="fas fa-moon"></i>
										<i class='fas fa-sun'></i>
										<div class='ball'>
									</label>
								</div>
							</li>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Bottom End -->
</header>
<script>
	const checkbox = document.getElementById('checkbox');

	checkbox.addEventListener('change', () => {
		document.body.classList.toggle('light');
	});
</script>
<!-- ========== Header End ========== -->