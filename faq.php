<?php include 'includes/home_header.php'; ?>
<div class="main__body pb__50">

	<style type="text/css">

.collapsible {
 background-color:var(--color-main); color: #fff;cursor: pointer; padding: 18px;width: 100%;border: none;text-align: left;
 outline: none;font-size: 15px; font-weight: bold;margin-bottom: 3px;}
.active, .collapsible:hover {
 background-color: var(--color-main1);
}

/* Style the collapsible content. Note: hidden by default */
	.content {
	 padding: 0 18px;
	 display: none;
	overflow: hidden;
	background-color: green;
	color:white;
	}

	.collapsible:after {
	  content: '\2b'; /* Unicode character for "plus" sign (+) */
	  font-size: 18px;
	  color: white;
	  float: right;
	  margin-left: 5px;
	  outline:none;
	  border:none;
	}

.active:after {
  content: "\2d";
  font-size: 18px; /* Unicode character for "minus" sign (-) */
}
	</style>

	<div class="mt__50">
		<div class="d__flex space__between py__75 bg__secondary text__white spacing__left__default">
			<h3><a href="">Home</a> > FAQ</h3>
		</div>

		<div class="mt__30 spacing__left__default bg__white ">
			<div class="row__lists grid__gap__1 grid__ls__col__gap__3 p__20">
			<div class="col__ls__12 d__inline__block">
					 <div class="collapsible_panel">
					 	<button type="button" class="collapsible">Why Cafeteria?</button>
						  <div class="content">
			  				  <p>Lorem ipsum...</p>
						 </div>
					 </div>
					
					 <div class="collapsible_panel">
					 	<button type="button" class="collapsible">How easy is it for me to shop on Cafteria? </button>
						  <div class="content">
			  				  <p>Lorem ipsum...</p>
						 </div>
					 </div>

					  <div class="collapsible_panel">
					 	<button type="button" class="collapsible">How secure and quality </button>
						  <div class="content">
			  				  <p>Lorem ipsum...</p>
						 </div>
					 </div>

					  <div class="collapsible_panel">
					 	<button type="button" class="collapsible">Can I report a Vendors' Delivery</button>
						  <div class="content">
			  				  <p>Lorem ipsum...</p>
						 </div>
					 </div>
			</div>
			
			
		</div>
	</div>
	</div>	


	

</div>

<script type="text/javascript">
	var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>
<?php include("includes/footer.php")  ?>