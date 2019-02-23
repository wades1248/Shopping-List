/*Things to do in JS:
Prevent default form submission,
make form submission result in a new <li> element (copy and paste some code)
ensure that forms enter on "return" and "click",
add class "shopping-item_checked" upon clicking check buttom. (.toggleClass)
remove "shopping-item_checkied" if buttom is checked again
delete item when "delete" is clicked,
ensure good semantic HTML is being used and that buttons are accessable,*/

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

