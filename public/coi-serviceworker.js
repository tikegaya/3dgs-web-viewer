// Cross-Origin Isolation Support

if (self.crossOriginIsolated) {
    console.log('This environment is cross-origin isolated.');
} else {
    console.error('This environment is NOT cross-origin isolated. SharedArrayBuffer support cannot be guaranteed.');
}

// Additional Service Worker logic can be implemented below.