// Init App
var myApp = new Framework7({
    modalTitle: 'Message',
    // Enable Material theme
    material: true,
    template7Pages: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function(e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.showPreloader();
});
$$(document).on('ajaxComplete', function(e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.hidePreloader();
});

// Callbacks for specific pages when it initialized
myApp.onPageInit('home', function(page) {
    $$.ajax({
        url: 'http://ibacor.com/api/gsm-arena?view=brands',
        dataType: 'json',
        success: function(data) {
            if (data.status == 'sukses') {
                $$.each(data.data, function(k, v) {
                    var anu = '';
                    anu += '<li><a href="produk.html?title=' + v.title + '&slug=' + v.slug + '" class="item-link close-panel">';
                    anu += '	<div class="item-content">';
                    anu += '		<div class="item-inner">';
                    anu += '			<div class="item-title">' + v.title + '</div>';
                    anu += '			<div class="item-after"><span class="badge bg-green">' + v.count + '</span></div>';
                    anu += '		</div>';
                    anu += '	</div>';
                    anu += '</a></li>';
                    if (v.title.substring(0, 1) == 'a' || v.title.substring(0, 1) == 'A') {
                        $$('#l_a').append(anu);
                    } else if (v.title.substring(0, 1) == 'b' || v.title.substring(0, 1) == 'B') {
                        $$('#l_b').append(anu);
                    } else if (v.title.substring(0, 1) == 'c' || v.title.substring(0, 1) == 'C') {
                        $$('#l_c').append(anu);
                    } else if (v.title.substring(0, 1) == 'd' || v.title.substring(0, 1) == 'D') {
                        $$('#l_d').append(anu);
                    } else if (v.title.substring(0, 1) == 'e' || v.title.substring(0, 1) == 'E') {
                        $$('#l_e').append(anu);
                    } else if (v.title.substring(0, 1) == 'f' || v.title.substring(0, 1) == 'F') {
                        $$('#l_f').append(anu);
                    } else if (v.title.substring(0, 1) == 'g' || v.title.substring(0, 1) == 'G') {
                        $$('#l_g').append(anu);
                    } else if (v.title.substring(0, 1) == 'h' || v.title.substring(0, 1) == 'H') {
                        $$('#l_h').append(anu);
                    } else if (v.title.substring(0, 1) == 'i' || v.title.substring(0, 1) == 'I') {
                        $$('#l_i').append(anu);
                    } else if (v.title.substring(0, 1) == 'j' || v.title.substring(0, 1) == 'J') {
                        $$('#l_j').append(anu);
                    } else if (v.title.substring(0, 1) == 'k' || v.title.substring(0, 1) == 'K') {
                        $$('#l_k').append(anu);
                    } else if (v.title.substring(0, 1) == 'l' || v.title.substring(0, 1) == 'L') {
                        $$('#l_l').append(anu);
                    } else if (v.title.substring(0, 1) == 'm' || v.title.substring(0, 1) == 'M') {
                        $$('#l_m').append(anu);
                    } else if (v.title.substring(0, 1) == 'n' || v.title.substring(0, 1) == 'N') {
                        $$('#l_n').append(anu);
                    } else if (v.title.substring(0, 1) == 'o' || v.title.substring(0, 1) == 'O') {
                        $$('#l_o').append(anu);
                    } else if (v.title.substring(0, 1) == 'p' || v.title.substring(0, 1) == 'P') {
                        $$('#l_p').append(anu);
                    } else if (v.title.substring(0, 1) == 'q' || v.title.substring(0, 1) == 'Q') {
                        $$('#l_q').append(anu);
                    } else if (v.title.substring(0, 1) == 'r' || v.title.substring(0, 1) == 'R') {
                        $$('#l_r').append(anu);
                    } else if (v.title.substring(0, 1) == 's' || v.title.substring(0, 1) == 'S') {
                        $$('#l_s').append(anu);
                    } else if (v.title.substring(0, 1) == 't' || v.title.substring(0, 1) == 'T') {
                        $$('#l_t').append(anu);
                    } else if (v.title.substring(0, 1) == 'u' || v.title.substring(0, 1) == 'U') {
                        $$('#l_u').append(anu);
                    } else if (v.title.substring(0, 1) == 'v' || v.title.substring(0, 1) == 'V') {
                        $$('#l_v').append(anu);
                    } else if (v.title.substring(0, 1) == 'w' || v.title.substring(0, 1) == 'W') {
                        $$('#l_w').append(anu);
                    } else if (v.title.substring(0, 1) == 'x' || v.title.substring(0, 1) == 'X') {
                        $$('#l_x').append(anu);
                    } else if (v.title.substring(0, 1) == 'y' || v.title.substring(0, 1) == 'Y') {
                        $$('#l_y').append(anu);
                    } else if (v.title.substring(0, 1) == 'z' || v.title.substring(0, 1) == 'Z') {
                        $$('#l_z').append(anu);
                    }
                });
            }
        },
        error: function() {
			myApp.hideIndicator();
			myApp.addNotification({
				message: 'No Internet Connection'
			});
		}
    });
});

// Callbacks for specific pages when it initialized
myApp.onPageInit('produk', function(page) {
    $$.ajax({
        url: 'http://ibacor.com/api/gsm-arena?view=brand&slug=' + $$('body #slug').html() + '&page=1',
        dataType: 'json',
        success: function(data) {
            if (data.status == 'error') {
                myApp.alert('Error.');
            } else {
                var anu = '';
                $$.each(data.data, function(k, v) {
                    anu += '<div class="col-50"><a href="detail.html?title=' + v.title + '&slug=' + v.slug + '"><img src="' + v.img + '"/><p>' + v.title + '</p></a></div>';
                });
                $$('body #produk').html(anu);
            }
        },
        error: function() {
			myApp.hideIndicator();
			myApp.addNotification({
				message: 'No Internet Connection'
			});
		}
    });
    // Loading trigger
    var loading = false;
    // Last loaded index, we need to pass it to script
    var lastLoadedIndex = 2;
    // Attach 'infinite' event handler
    $$('.infinite-scroll').on('infinite', function() {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading trigger
        loading = true;
        // Request some file with data
        $$.ajax({
            url: 'http://ibacor.com/api/gsm-arena?view=brand&slug=' + $$('#slug').html() + '&page=' + lastLoadedIndex,
            dataType: 'json',
            success: function(data) {
                if (data.status == 'error') {
                    loading = true;
                } else {
                    var anu = '';
                    $$.each(data.data, function(k, v) {
                        anu += '<div class="col-50"><a href="detail.html?title=' + v.title + '&slug=' + v.slug + '"><img src="' + v.img + '"/><p>' + v.title + '</p></a></div>';
                    });
                    if (lastLoadedIndex < data.total_page) {
                        loading = false;
                    }
                    $$('#produk').append(anu);
                }
                lastLoadedIndex = lastLoadedIndex + 1;
            },
			error: function() {
				myApp.hideIndicator();
				myApp.addNotification({
					message: 'No Internet Connection'
				});
			}
        });
    });
});

// Callbacks for specific pages when it initialized
myApp.onPageInit('cari', function(page) {
    $$('#cari').on('click', function() {
        $$.ajax({
            url: 'http://ibacor.com/api/gsm-arena?view=search&q=' + $$('#query').val(),
            dataType: 'json',
            success: function(b) {
                var c = '';
                if (b.status != 'error') {
                    $$.each(b.data, function(i, a) {
                        c += '<li><a href="detail.html?title=' + a.title + '&slug=' + a.slug + '" class="item-link close-panel">';
                        c += '	<div class="item-content">';
                        c += '	<div class="item-media"><img src="' + a.img + '"/></div>';
                        c += '		<div class="item-inner">';
                        c += '			<div class="item-title">' + a.title + '</div>';
                        c += '		</div>';
                        c += '	</div>';
                        c += '</a></li>';
                    });
                } else {
                    c += '<li class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="item-title">Nothing found</div>' +
                        '</div>' +
                        '</li>';
                }
                $$('#nama').html('<ul>' + c + '</ul>');
            },
			error: function() {
				myApp.hideIndicator();
				myApp.addNotification({
					message: 'No Internet Connection'
				});
			}
        });
    });
});

// Callbacks for specific pages when it initialized
myApp.onPageInit('detail', function(page) {
    $$.ajax({
        url: 'http://ibacor.com/api/gsm-arena?view=product&slug=' + $$('body #slugkat').html(),
        dataType: 'json',
        success: function(b) {
            if (b.status == 'error') {
                myApp.alert('Error.');
            } else {
                var c = '<center><img src="' + b.img + '"/></center>';
                c += '<div class="list-block accordion-list">';
                c += '<ul>';
                $$.each(b.data, function(index, value) {
                    c += '<li class="accordion-item"><a href="#" class="item-link item-content">';
                    c += '	<div class="item-inner"> ';
                    c += '	  <div class="item-title" style="text-transform:uppercase;font-size:2em">' + index + '</div>';
                    c += '	</div></a>';
                    c += '  <div class="accordion-item-content">';
                    c += '		<div class="content-block">';
                    c += '			<table>';
                    $$.each(value, function(i, v) {
                        c += '<tr>';
                        c += '	<td class="tit">' + i.replace("_", " ") + '</td>';
                        c += '	<td class="dsc">' + v + '</td>';
                        c += '</tr>';
                    });
                    c += '			</table>';
                    c += '		</div>';
                    c += '  </div>';
                    c += '</li>';
                });
                c += '	</ul>';
                c += '</div>';
                $$('body #spek').html(c);
            }
        },
        error: function() {
			myApp.hideIndicator();
			myApp.addNotification({
				message: 'No Internet Connection'
			});
		}
    });
});

/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function() {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-left').on('close', function() {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});

mainView.router.loadPage('home.html');
