// Morris
// ----------------------------------- 

(function(window, document, $, undefined){

  $(function(){

    if ( typeof Morris === 'undefined' ) return;

    var chartdata = [
      { y: "10/1", a: gon.array[0], b: gon.array[1], c: gon.array[2]},
      { y: "10/2", a: gon.array[3], b: gon.array[4], c: gon.array[5]},
      { y: "10/3", a: gon.array[6], b: gon.array[7], c: gon.array[8]},
      { y: "10/4", a: gon.array[9], b: gon.array[10], c: gon.array[11]},
      { y: "10/5", a: gon.array[12], b: gon.array[13], c: gon.array[14]},
      { y: "10/6", a: gon.array[15], b: gon.array[16], c: gon.array[17]},
      { y: "10/7", a: gon.array[18], b: gon.array[19], c: gon.array[20]}
    ];

    var donutdata = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales",value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];

    // Line Chart
    // ----------------------------------- 

    if( document.getElementById('morris-line') )
      new Morris.Line({
        element: 'morris-line',
        data: chartdata,
        xkey: 'y',
        ykeys: ["a", "b"],
        labels: ["Serie A", "Serie B"],
        lineColors: ["#31C0BE", "#7a92a3"],
        resize: true
      });

    // Donut Chart
    // ----------------------------------- 
    if( document.getElementById('morris-donut') )
      new Morris.Donut({
        element: 'morris-donut',
        data: donutdata,
        colors: [ '#f05050', '#fad732', '#ff902b' ],
        resize: true
      });

    // Bar Chart
    // ----------------------------------- 
    if( document.getElementById('morris-bar') )
      new Morris.Bar({
        element: 'morris-bar',
        data: chartdata,
        xkey: 'y',
        ykeys: ["a", "b", "c"],
        labels: ["Severe", "Moderate", "Mild"],
        xLabelMargin: 2,
        barColors: ['#f05050', '#4a8ef1', '#23b7e5' ],
        resize: true
      });

    // Area Chart
    // ----------------------------------- 
    if( document.getElementById('morris-area') )
      new Morris.Area({
        element: 'morris-area',
        data: chartdata,
        xkey: 'y',
        ykeys: ["a", "b"],
        labels: ["Serie A", "Serie B"],
        lineColors: [ '#7266ba', '#23b7e5' ],
        resize: true
      });

  });

})(window, document, window.jQuery);
