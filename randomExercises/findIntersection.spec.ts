import Intersection from './findIntersection'

describe('intersections()', () => {
    const intersections = new Intersection();

    it('return 1, 4, 13 from ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]', () => {
        const expectedResult: string = '1,4,13';
        expect(intersections.findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])).toEqual(expectedResult);
    })

    it('return false from ["2, 4, 6, 8, 10", "1, 3, 5, 7, 9"]', () => {
        expect(intersections.findIntersection(["2, 4, 6, 8, 10", "1, 3, 5, 7, 9"])).toEqual('false');
    })

    it('return false from ["-1","1"]', () => {
        expect(intersections.findIntersection(["-1","1"])).toEqual('false');
    })

    it('return 1,3 from ["-1, 1, 2, 3","1, -2, 3"]', () => {
        const expectedResult: string = '1,3';
        expect(intersections.findIntersection(["-1, 1, 2, 3","1, -2, 3"])).toEqual(expectedResult);
    })

    it('return false from []', () => {
        expect(intersections.findIntersection([])).toEqual('false');
    })
})