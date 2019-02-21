// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const enzyme = {};
enzyme.reduxMockState = {
  locale: {
    locale: 'no',
    messages: {
      id: 'message'
    }
  },
  loginPage: {
    loggingIn: true,
    serverError: 'serverError',
    phoneError: 'phoneError',
    passwordError: 'passwordError'
  },
  loyaltyCardPage: {
    allClubsError: 'allClubsError',
    allClubsLoading: true,
    allClubs: [{
      clubId: '1',
      clubName: 'clubName 1'
    }, {
      clubId: '2',
      clubName: ' clubName 2'
    }],
    userClubsError: 'userClubsError',
    userClubsLoading: true,
    userClubs: [{
      clubId: 1,
      visited: 1,
      clubName: 'clubName 1',
      maxVisits: 3
    }, {
      clubId: 2,
      visited: 0,
      clubName: 'clubName 2',
      maxVisits: 3
    }],
    selectClubLoading: true,
    selectClubError: 'selectClubError',
    registerClubLoadings: {
      club1: true,
      club2: false
    },
    registerClubErrors: {
      club1: 'error1',
      club2: 'error2'
    }
  },
  membershipCardPage: {
    loading: false,
    user: {
      custid: 'userId',
      username: 'user name'
    }
  }
};

global.enzyme = enzyme;
