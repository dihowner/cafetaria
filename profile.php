<?php include "includes/header.php" ?>


<div class="body__content">
		<div class="row__lists__stretched">
			<?php include "includes/sidebar.php" ?>

			<div class="col__ls__10 col__ss__10 col__ts__12 body__content__main">
					<div class="row__lists">
						<div class="col__ls__6">
							<div class="d__flex justify__end">
								<a href="accountdetails" class="btn bg__secondary">Add Bank Details</a>								
							</div>
						<div class="profilepic mx-auto my__20" >
							<img class="profileimg" src="assets/images/default.jpg">
							<img src="assets/images/capture.png" class="profileicon">
							<input type="file" name="" class="d__none">
						</div>

						<form class="d__flex flex__col gap__20">
							
							<div class="form-group">
								<label>Full Name:</label>
								<input type="text" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div class="form-group">
								<label>Email:</label>
								<input type="text" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div class="form-group">
								<label>Username:</label>
								<input type="text" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div class="form-group">
								<label>Password:</label>
								<input type="text" name=""placeholder="Ayobami" class="form-control mt__10">		
							</div>

							<div>
								<button class="btn bg__secondary">Update</button>	
							</div>
							

						</form>

						
						
						
					</div>
			</div>
		</div>
</div>

</body>
</html>