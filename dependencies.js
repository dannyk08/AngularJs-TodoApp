const jsRegex = /.js$/i

function appendMinifiedExt(prod) {
  const ext = prod ? '.min.js' : '.js'
  return function (script) {
    return script.replace(jsRegex, ext)
  }
}

exports.dependencies = function (prod) {
  return [
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.10/angular.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-animate/1.8.2/angular-animate.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-cookies/1.8.2/angular-cookies.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-route/1.8.2/angular-route.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.6/ui-bootstrap-tpls.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-touch/1.6.10/angular-touch.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.10/angular-resource.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.10/angular-sanitize.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-messages/1.6.10/angular-messages.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-breadcrumb/0.5.0/angular-breadcrumb.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.11/ngStorage.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-file-upload/2.6.1/angular-file-upload.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ng-idle/1.3.2/angular-idle.js',
  ].map(appendMinifiedExt(prod))
}
