<?php include "includes/header.php" ?>

<div class="body__content">
		<div class="row__lists__stretched">
			<?php include "includes/sidebar.php" ?>

			<div class="col__ls__10 col__ss__10 col__ts__12 body__content__main">

				<div class="d__flex align__center gap__15">
					<i class="ri-arrow-left-line fs__10 back" onclick="history.back()"></i>
					<h3>Order Details</h3>
				</div>

				<div class="mt__20 d__flex flex__col gap__5">
					<h5 class="fs__4">ORDER ID: <span>AB12345678</span></h5>
					<p class="text__blur fs__4 fw__600">2 Items</p>	
					<p class="fs__5 text__blur fs__4 fw__600">Placed On 25-04-2023</p>
					<p class="text__blur fs__4 fw__600">Total: N1400</p>
				</div>
				<div class="divider col__ls__8 my__15"></div>
				<div class="d__flex flex__col gap__10">
					<p class="fs__4 fw__600">ITEMS IN YOUR ORDER</p>
					<span class=" bg__red py__10 text__white fs__4 fw__500 px__30 align__self__start fs__3">Pending</span>
					<p class="fs__4 text__blur fs__4 fw__600">Placed On 25-04-2023</p>

					<div class="row__lists__stretched align__center grid__gap__1">
						<div class="col__ls__2 col__ss__2 col__ts__12">
							<img src="assets/images/slide1.jfif">
						</div>
						<div class="col__ls__7 col__ss__7 col__ts__12">
							<div class="d__flex flex__col gap__5">
								<p class="fw__500">Amala/Chicken and Vegetable Soup</p>
								<span>QTY:12</span>
								<span>N11200</span>
							</div>
						</div>
					</div>
				</div>

				<div class="row__lists__stretched mt__30 grid__gap__1 grid__ts__col__gap__3">
					<div class="col__ls__5 col__ss__5 col__ts__12">
						<div class="d__flex flex__col">
							<div class="order__table">
								
									<div class="fw__600 px__10 py__15">PAYMENT INFORMATION</div>
									<div class="divider"></div>

									<div class="order__body px__10 py__20">
										<div class="d__flex flex__col gap__10">
											<p class="fs__3 fw__500">ITEMS IN YOUR ORDER</p>
											<span class="fs__2">Pay with Bank Transfer or USSD</span>
										</div>

										<div class="d__flex flex__col gap__10">
											<p class="fs__3 fw__500">Payment Detail</p>
											<span class="fs__2">Total Items: 20</span>
											<span class="fs__2">Delivery Fee: 20</span>
											<div class="fw__600">Total: N5000</div>
										</div>

									</div>

				
								</div>
							</div>
						</div>

						<div class="col__ls__5 col__ss__5 col__ts__12">
							<div class="d__flex flex__col">
								<div class="order__table">
								
									<div class="fw__600 px__10 py__15">DELIVERY INFORMATION</div>
									<div class="divider"></div>

									<div class="order__body px__10 py__20">
										<div class="d__flex flex__col gap__10">
											<p class="fs__3 fw__500">DELIVERY METHOD</p>
											<span class="fs__2">Doorstep Delivery</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col__ls__5">
						<div>
							
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>
	<!-- <div class="orderdiv">
		<p class="orderdivp">Order Details</p>
		<h3 class="idp">Order ID 123456789</h3>
		<p class="otherdetail">2 items<br>placedon 25-04-23<br>Total: N 1,300</p>
		<hr>
		<p style="font-family:verdana;margin-bottom: 25px;">ITEMS IN YOUR ORDER</p>
		<p class="ordercancel">CANCELED-PAYMENT UNSUCCESSFUL</p>
		<h3 class="orderdate">On 05-04-23</h3>
		<img src="assets/images/slide1.jfif"style="width: 161px;height: 132.6px;">
		<p class="picp">youghurt</p>
		<p class="picp">qty:1</p>
		<p class="picp">n 1,300</p>
		<div class="paymentinfo">
			<div class="paaydiv"><p>PAYMENT INFORMATION</p></div>
			<h4 class="payme">Payment Method</h4>
			<p class="paymeth">Pay with Bank Transfer or USSD</p>
			<h4 class="paydet">payment details</h4>
			<p class="paymeth">items Total: 1,300</p>
			<p class="paymeth">Delivery Fees: 1,000</p>
			<p class="paymet">Total:2,300</p>
		</div>
		<div class="deliveryinfo">
			<div class="paaydiv"><p>DELIVERY INFORMATION</p></div>
			<h4 class="payme">Delivery Method</h4>
			<p class="paymeth">Door Delivery</p>
		</div>
    </div> -->
</body>
</html>