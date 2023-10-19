<?php include "includes/header.php" ?>


<div class="body__content">
		<div class="row__lists__stretched">
			<?php include "includes/sidebar.php" ?>

			<div class="col__ls__10 col__ss__10 col__ts__12 body__content__main">
				
				<h4>Order Details</h4>

				<ul class="d__flex mt__20 gap__15 flex__wrap	">
					<li><a href="open_order">Open Order (2)</a></li>
					<li class="fw__600"><a href="closed_order">Closed Orders(3)</a></li>
					<li><a href="">Completed(2)</a></li>
				</ul>

				<div class="row__lists">
					<div class="col__ls__9">
						<div class="orders__wrapper d__flex flex__col mt__20 gap__20">
							
							<div class="orders__list px__10 py__15">
								<div class="row__lists__stretched grid__gap__2 grid__ss__row__gap__1">
									<div class="col__ls__3 col__ss__3 col__ts__12">
										<img src="assets/images/slide2.jpg">
									</div>

									<div class="col__ls__6 col__ss__6 col__ts__12">
										<div class="d__flex gap__12 flex__col">
											<h4>Amala/Chicken and Vegetable Soup</h4>
											<span>Order ID: 12345678</span>
											<span class="py__10 text__white fs__4 fw__500 px__30 bg__red align__self__start fs__3">CANCELLED BY USER</span>
											<span>On 25th Oct 20203</span>
										</div>
									</div>

									<div class="col__ls__2 col__ss__3 col__ts__12">
										<a class="text__red" href="order_details">See Details</a>
									</div>
								</div>
							</div>

							<div class="orders__list px__10 py__15">
								<div class="row__lists__stretched grid__gap__2 grid__ss__row__gap__1">
									<div class="col__ls__3 col__ss__3 col__ts__12">
										<img src="assets/images/slide2.jpg">
									</div>

									<div class="col__ls__6 col__ss__6 col__ts__12">
										<div class="d__flex gap__12 flex__col">
											<h4>Amala/Chicken and Vegetable Soup</h4>
											<span>Order ID: 12345678</span>
											<span class="py__10 text__white fs__4 fw__500 px__30 bg__red align__self__start fs__3">CANCELLED BY USER</span>
											<span>On 25th Oct 20203</span>
										</div>
									</div>

									<div class="col__ls__2 col__ss__3 col__ts__12">
										<a class="text__red" href="order_details">See Details</a>
									</div>
								</div>
							</div>


							<div class="orders__list px__10 py__15">
								<div class="row__lists__stretched grid__gap__2 grid__ss__row__gap__1">
									<div class="col__ls__3 col__ss__3 col__ts__12">
										<img src="assets/images/slide2.jpg">
									</div>

									<div class="col__ls__6 col__ss__6 col__ts__12">
										<div class="d__flex gap__12 flex__col">
											<h4>Amala/Chicken and Vegetable Soup</h4>
											<span>Order ID: 12345678</span>
											<span class="py__10 text__white fs__4 fw__500 px__30 bg__red align__self__start fs__3">CANCELLED BY ADMIN</span>
											<span>On 25th Oct 20203</span>
										</div>
									</div>

									<div class="col__ls__2 col__ss__3 col__ts__12">
										<a class="text__red" href="order_details">See Details</a>
									</div>
								</div>
							</div>


						</div>
					</div>
				</div>
			</div>

		</div>
</div>
</div>
</body>
</html>