using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;


namespace DashAdmin_SS.Pages
{
    [Authorize]
    public class IndexModel : PageModel
    {

        public IndexModel()
        {
        }


        public void OnGet()
        {

        }

    
    }
}
