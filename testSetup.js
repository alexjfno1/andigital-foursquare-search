import { jsdom } from 'jsdom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.shallow = shallow;
global.mount = mount;
global.expect = expect;
global.sinon = sinon;

chai.use(sinonChai);
