$(document).ready(function() {
    // Select all elements with any of the specified data attributes
    const $toggleElements = $('[data-cos_add_on_scroll], [data-cos_remove_on_scroll], [data-cos_add_on_scroll_out], [data-cos_remove_on_scroll_out]');

    function isElementInViewport(el) {
        const rect = el[0].getBoundingClientRect();
        // Check if any part of the element is in the viewport
        return (
            rect.top < window.innerHeight && // Element is above the bottom of the viewport
            rect.bottom > 0 &&                // Element is below the top of the viewport
            rect.left < window.innerWidth &&  // Element is to the right of the left of the viewport
            rect.right > 0                    // Element is to the left of the right of the viewport
        );
    }

    function handleClassToggle() {
        $toggleElements.each(function() {
            const $this = $(this);
            const addOnScroll = $this.data('cos_add_on_scroll') ? $this.data('cos_add_on_scroll').split(' ') : [];
            const removeOnScroll = $this.data('cos_remove_on_scroll') ? $this.data('cos_remove_on_scroll').split(' ') : [];
            const addOnScrollOut = $this.data('cos_add_on_scroll_out') ? $this.data('cos_add_on_scroll_out').split(' ') : [];
            const removeOnScrollOut = $this.data('cos_remove_on_scroll_out') ? $this.data('cos_remove_on_scroll_out').split(' ') : [];

            // Check if the element is in the viewport
            if (isElementInViewport($this)) {
                // Add classes specified in cos_add_on_scroll
                addOnScroll.forEach(cls => {
                    if (!$this.hasClass(cls)) {
                        $this.addClass(cls);
                    }
                });

                // Remove classes specified in cos_remove_on_scroll
                removeOnScroll.forEach(cls => {
                    if ($this.hasClass(cls)) {
                        $this.removeClass(cls);
                    }
                });
            } else {
                // Add classes specified in cos_add_on_scroll_out
                addOnScrollOut.forEach(cls => {
                    if (!$this.hasClass(cls)) {
                        $this.addClass(cls);
                    }
                });

                // Remove classes specified in cos_remove_on_scroll_out
                removeOnScrollOut.forEach(cls => {
                    if ($this.hasClass(cls)) {
                        $this.removeClass(cls);
                    }
                });
            }
        });
    }

    // Initial check to add/remove classes for elements that are already in view
    handleClassToggle();

    // Listen for scroll events
    $(window).on('scroll', handleClassToggle);
});
