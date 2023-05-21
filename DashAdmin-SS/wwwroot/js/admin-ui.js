$(document).ready(function () {
    var drawerInstance = $("#drawer").data("kendoDrawer");
    drawerInstance.show();

    $("#profile-panelbar").kendoPanelBar().data("kendoPanelBar");

    $("#panelbar").kendoPanelBar({
        select: function (e) {
            // Hide the third-level column when a top-level item is selected
            if ($(e.item).parent().is("#panelbar")) {
                $("#third-level-column").hide();
            }
            // Show corresponding third-level items when a second-level item is selected
            var target = $(e.item).data("target");
            if (target) {
                $(".third-level-items").hide();
                $(target).show();
                $("#third-level-column").show();
            }
        }
    }).data("kendoPanelBar");

    $("#menuIcon").click(function () {
        var drawerInstance = $("#drawer").data("kendoDrawer");
        var drawerContainer = drawerInstance.drawerContainer;
        if (drawerContainer.hasClass("k-drawer-expanded")) {
            drawerInstance.hide();
        } else {
            drawerInstance.show();
        };
        setTimeout(function () {
            kendo.resize($(".k-chart"));
        }, 350);
    });
});