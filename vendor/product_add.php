<?php include "includes/header.php" ?>


<div class="body__content">
		<div class="row__lists__stretched">
			<?php include "includes/sidebar.php" ?>

			<div class="col__ls__10 col__ss__10 col__ts__12 body__content__main">

			

				<ul class="d__flex mt__20 gap__15 flex__wrap	">
					<li><a href="products">All Products (2)</a></li>
					<li class="fw__600"><a href="product_add">Add Products</a></li>
				</ul>

					<div class="row__lists mt__40">
						<div class="col__ls__7 mx-auto">
							

						<form class="d__flex flex__col gap__20">
							
							<div class="form-group">
								<label>Product Name:</label>
								<input type="text" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div class="form-group">
								<label>Product Image:</label>
								<input type="file" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div class="form-group">
								<label>Product Description:</label>
								<textarea name="" placeholder="Ayobami" rows="6" class="form-control mt__10"></textarea>
							</div>

							<div class="form-group">
								<label>Product Price:</label>
								<input type="number" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div class="form-group">
								<p>Add 10% Discount</p>	
								<div class="d__flex gap__20 mt__10">
									<label>
										<input type="radio"> Yes
									</label>

									<label>
										<input type="radio"> No
									</label>	
								</div>
							</div>



							<div class="form-group">
								<p>Available in Stock?</p>	
								<div class="d__flex gap__20 mt__10">
									<label>
										<input type="radio"> Yes
									</label>

									<label>
										<input type="radio"> No Unit Available
									</label>	
								</div>
							</div>

							<div>
								<button class="btn bg__secondary">Add Product</button>	
							</div>
							

						</form>

						
						
						
					</div>
			</div>
		</div>
</div>

</body>
</html>