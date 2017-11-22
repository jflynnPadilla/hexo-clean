hexo.extend.helper.register('getPageType', function() {
    
    var pageTypeArray = this.page.path.split('/');
    var pageType = pageTypeArray[0]
    if(pageType == "index.html"){ pageType = "home"};
    if(this.page.pageType == "post"){ pageType = "blogPost"}
    
    return pageType;
});