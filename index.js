$(function runList(){

	$("#js-shopping-list-form").submit(event => {
		event.preventDefault();
		const usrInput = $("#shopping-list-entry").val();
			$(".shopping-list").append(
				`<li>
							<span class="shopping-item">${usrInput}</span>
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

	$(".shopping-list").on("click",".shopping-item-toggle", function() {
		$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
		}/*event function close*/
	)/*submit close*/
	$(".shopping-list").on("click",".shopping-item-delete", function() {
		$(this).closest("li").detach();})

})/*runList close*/