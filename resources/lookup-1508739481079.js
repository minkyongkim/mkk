(function(window, undefined) {
  var dictionary = {
    "ab15e645-9cb5-4623-82bd-b7013b169668": "GiftFeed",
    "08672648-bdd3-47ae-9ec5-e47fc77773e5": "Filter-Her",
    "5de8242f-4309-4091-847a-ffa4512faef0": "Sign Up",
    "afc21420-e363-48cc-a3d3-73da805ba083": "Home B",
    "bbd97cf8-4c72-413a-a300-928d00500a84": "Wishlist_Wishlist",
    "f4a1839f-9ee3-402e-9095-efa2f22f0ad9": "Shipping",
    "9f5d503d-40c8-48c3-b6e4-1d786897d54e": "Wishlist_Add",
    "90e08e28-5903-4b95-970b-682b04e95d63": "Sign Up-Email",
    "19a62818-7310-4d16-bbbf-0fecb07596b0": "Sign Up-Facebook",
    "b8a3910c-998d-411e-b291-76a3705475d8": "Add Profile",
    "535387ee-61ff-4030-b8a2-d09939c430fa": "Track Order",
    "4e770701-1d36-491a-b27d-8cd8d1cfd8a3": "Filter-Group",
    "ef049a99-a271-4f11-9c32-fe79138b383f": "Occasion Only",
    "69b8d2da-f26f-4bb5-8bb9-00860b094771": "Filter-Him",
    "55928431-53d6-4e96-b8e0-c3fcc2f2ffd0": "Select Profile",
    "71548b50-e5a8-4034-9b4d-7f1e16dbb2c7": "Add interests",
    "e58d1b63-b568-443f-aaff-4b010c9e198c": "Billing Scan Card",
    "8b855ef0-3cbf-47c3-a023-df3f0276ed08": "Occasion_Fraternity",
    "31002e73-215c-4997-89c8-d7413281126a": "Occastion_Sorority",
    "d030c249-6316-41ae-841e-6ea15fd0237c": "Cart",
    "13c86f65-cede-41ea-97a6-ea93956175f4": "Item Details",
    "d16f7917-a5ce-4b08-8b68-db0e66d77790": "Home",
    "5e6f3123-27a1-4a54-9b19-e1517fbd1fd6": "My Orders",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash",
    "a8fe7d37-331c-4bf6-a684-7b776bdbeb09": "Add interests FRAT",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);