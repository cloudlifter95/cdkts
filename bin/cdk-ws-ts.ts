#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWsTsStack } from '../lib/cdk-ws-ts-stack';

const app = new cdk.App();
new CdkWsTsStack(app, 'CdkWsTsStack');
