
function runList(){

 $("#js-shopping-list-form").submit(event => {
   event.preventDefault();
   const usrInput = $("#shopping-list-entry").val();
    $(".shopping-list").append(   
        `<li>
							<span class="shopping-item shopping-item">${usrInput}</span>
								<div class="shopping-item-controls">
									<button class="shopping-item-toggle">
										<span class="button-label">check</span>
									</button>
									<button class="shopping-item-delete">
										<span class="button-label">delete</span>
									</button>
								</div>
							</li>`);
						}/*event function close*/
					)/*submit close*/

 $(".shopping-item-toggle").click(event => {
	$(event.target).closest("li").toggleClass("shopping-item__checked");
		}/*event function close*/
	)/*submit close*/
	$(".shopping-item-delete").click(event => {
		$(event.target).closest("li").detach();})

}/*runList close*/

$(runList())

