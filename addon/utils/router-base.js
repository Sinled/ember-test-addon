export default function(root) {
    root.resource('rtest', function() {
        this.route('list');
        this.route('add');
    });
}
