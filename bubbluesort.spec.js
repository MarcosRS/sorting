describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it ('returns a perfectly sorted array', function(){
        expect ( bubbleSort([5, 3, 1]) ). toEqual([1, 3, 5]);
    });

    it ('also cares the same numbers in different order', function() {
        expect ( bubbleSort([8, 2, 1, 5, 3, 2, 7]) ). toEqual([1, 2, 2, 3, 5, 7, 8]);
    });


});

