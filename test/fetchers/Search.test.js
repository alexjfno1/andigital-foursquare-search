import axios from 'axios';
import { fetchSearchResults } from '../../src/react/fetchers/Search';
import config from '../../src/react/config';

describe('src/react/fetchers/Search', () => {
  describe('fetchSearchResults', () => {
    it('calls the FourSquare explore api with search value', sinon.test(function () {
      const searchValue = 'A town';
      const dispatchSpy = this.spy();
      const axiosMock = this.mock(axios);
      axiosMock.expects('get').withArgs(
        `${config.fourSquareVenuesURL}/explore?client_id=${config.fourSquareClientID}&client_secret=${config.fourSquareClientSecret}&v=20170219&near=${searchValue}`
      );

      return fetchSearchResults(searchValue, dispatchSpy);
    }));

    it('dispatches SEARCH_RESULT_DATA action with response', sinon.test(function () {
      const searchValue = 'A town';
      const dispatchSpy = this.spy();
      const axiosMock = this.mock(axios);
      const response = { data: 'Response Data' };
      axiosMock.expects('get').returns(response);

      return fetchSearchResults(searchValue, dispatchSpy).then(() => {
        expect(dispatchSpy).to.have.been.calledWith({
          type: 'SEARCH_RESULT_DATA',
          response
        });
      });
    }));
  });
});
