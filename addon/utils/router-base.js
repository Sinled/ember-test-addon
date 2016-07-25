export default function(root) {
    root.route('rtest', function() {
        this.route('list');
        this.route('add');
    });
}
