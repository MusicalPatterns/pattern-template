import { Snapshot } from '../../../test'
import { buildEntities, buildScales, patternSpec } from '../src/indexForTest'

// tslint:disable-next-line:no-any
declare const require: any

describe('snapshot', () => {
    it('stays locked down', async (done: DoneFn) => {
        // tslint:disable-next-line:no-require-imports
        const snapshot: Snapshot = require('./snapshot')

        const actual: Snapshot = {
            entities: buildEntities(patternSpec),
            scales: buildScales(patternSpec),
        }

        expect(actual)
            .toEqual(snapshot)

        done()
    })
})
