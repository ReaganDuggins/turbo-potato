const assert = require('assert');
require('chai').should();

const InsertionSort = require('../src/sorting-algorithms/InsertionSort');

describe('Insertion Sort', function() {
    let insertion;

    beforeEach(function() {
        insertion = new InsertionSort([]);
    });

    describe('when given an empty list', function() {
        it('returns an enpty list', function() {
            let unsorted = [];
            let expectedSort = [];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has only one element', function() {
        it('returns original list', function() {
            let unsorted = [128];
            let expectedSort = [128];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has two elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1];
            let expectedSort = [1, 2];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has any number of elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1, 7, 3, 4, 8, 6, 5];
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when the list is reverse sorted', function() {
        it('sorts the list', function() {
            let unsorted = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });
});