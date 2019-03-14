(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(24),o=t.n(i),l=t(6),u=t(7),c=t(44),m=t.n(c);function d(){var n=Object(l.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');\n  ",";\n  body{\n    font-family: 'Maven Pro', sans-serif;\n    background-color: #ecf0f1;\n  }\n  a{\n      color:inherit;\n  }\n  main {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n  }\n"]);return d=function(){return n},n}Object(u.createGlobalStyle)(d(),m.a);var p=t(47),g=t(48),s=t(60),f=t(49),v=t(62),b=t(105),x=t(106),E=t(25),h=t(56),w=t(59);console.log(!1);var j=new w.a({uri:"https://graphqlmovie.herokuapp.com/"}),y=t(20),O=t.n(y);function k(){var n=Object(l.a)(["\n  query getMovieDetails($movieId: Int!) {\n    movie(id: $movieId) {\n      id\n      medium_cover_image\n      title\n      rating\n      description_intro\n      language\n      genres\n    }\n    suggestions(id: $movieId) {\n      id\n      medium_cover_image\n      title\n      rating\n    }\n  }\n"]);return k=function(){return n},n}function _(){var n=Object(l.a)(["\n  {\n    movies(limit: 10, rating: 7) {\n      id\n      title\n      genres\n      rating\n      medium_cover_image\n    }\n  }\n"]);return _=function(){return n},n}var I=O()(_()),M=O()(k()),L=t(103);function H(){var n=Object(l.a)(["\n  background-color: white;\n  width: auto;\n  padding: 10px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  position: absolute;\n  bottom: 25px;\n  left: 0;\n  right: 0;\n   margin: auto;\n"]);return H=function(){return n},n}function Q(){var n=Object(l.a)(["\nborder-radius: 15px;\nbox-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\nbackground-image: ",";\nbackground-size: cover;\nbackground-position: center center;\nheight: 300px;\nwidth: 200px;\nmargin-bottom: 40px;\nposition: relative;\n\n"]);return Q=function(){return n},n}var q=u.default.div(Q(),function(n){return"url(".concat(n.background,")")}),P=u.default.span(H()),S=function(n){var e=n.id,t=n.title,r=n.rating,i=n.poster;return a.a.createElement(L.a,{to:"/details/".concat(e)},a.a.createElement(q,{background:i},a.a.createElement(P,null,t," / ",r,"\u2b50\ufe0f")))},$=t(104),z=t(23);function C(){var n=Object(l.a)(["\n  display:grid;\n  grid-template-columns:repeat(3, 0.7fr);\n  flex-wrap: wrap;\n  justify-items:center;\n  color:red;\n"]);return C=function(){return n},n}var F=u.default.div(C()),J=function(){var n=Object($.a)(I),e=n.data,t=n.error,r=n.loading;return a.a.createElement(F,null,a.a.createElement(z.Helmet,null,a.a.createElement("title",null,"Home | MovieQL")),r&&"Loading",t&&"Something is wrong",!r&&e&&e.movies&&e.movies.map(function(n){return a.a.createElement(S,{id:n.id,key:n.id,poster:n.medium_cover_image,title:n.title,rating:n.rating})}))};function A(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 0.7fr);\n  flex-wrap: wrap;\n  justify-items: center;\n  margin-top: 50px;\n"]);return A=function(){return n},n}function B(){var n=Object(l.a)(["\n  margin-bottom: 10px;\n  display: block;\n  font-weight: ",";\n"]);return B=function(){return n},n}function D(){var n=Object(l.a)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n"]);return D=function(){return n},n}function G(){var n=Object(l.a)(["\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  border-radius: 7px;\n"]);return G=function(){return n},n}function R(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  margin-bottom: 50px;\n"]);return R=function(){return n},n}var K=u.default.div(R()),N=u.default.div(G()).withComponent("img"),T=u.default.h1(D()),U=u.default.span(B(),function(n){return n.bold?"500":"400"}),V=u.default.div(A()),W=function(n){var e=n.match.params.movieId;return a.a.createElement(E.Query,{query:M,variables:{movieId:parseInt(e)}},function(n){var e=n.loading,t=n.error,r=n.data;return e?a.a.createElement(a.a.Fragment,null,a.a.createElement(z.Helmet,null,a.a.createElement("title",null,"Loading | MovieQL")),"loading"):t?"error":a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,a.a.createElement(z.Helmet,null,a.a.createElement("title",null,r.movie.title," | MovieQL")),a.a.createElement(N,{src:r.movie.medium_cover_image}),a.a.createElement("span",null,a.a.createElement(T,null,r.movie.title),a.a.createElement(U,{bold:!0},"Rating: ",r.movie.rating),a.a.createElement(U,null,r.movie.description_intro))),a.a.createElement(T,null,"Suggested"),a.a.createElement(V,null,r.suggestions.map(function(n){return a.a.createElement(S,{key:n.id,id:n.id,title:n.title,rating:n.rating,poster:n.medium_cover_image})})))})},X=function(n){function e(){return Object(p.a)(this,e),Object(s.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(v.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){return a.a.createElement(E.ApolloProvider,{client:j},a.a.createElement(h.a,{client:j},a.a.createElement(b.a,null,a.a.createElement("main",null,a.a.createElement(x.a,{path:"/",exact:!0,component:J}),a.a.createElement(x.a,{path:"/details/:movieId",component:W})))))}}]),e}(r.Component);o.a.render(a.a.createElement(X,null),document.getElementById("root"))},66:function(n,e,t){n.exports=t(100)}},[[66,2,1]]]);
//# sourceMappingURL=main.d6f840a8.chunk.js.map