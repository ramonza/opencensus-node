/**
 * Copyright 2018, OpenCensus Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Measurement, View} from '../stats/types';
import * as configTypes from '../trace/config/types';
import * as modelTypes from '../trace/model/types';

/** Defines a trace exporter interface. */
export interface Exporter extends modelTypes.SpanEventListener {
  /**
   * Sends a list of root spans to the service.
   * @param rootSpans A list of root spans to publish.
   */
  publish(rootSpans: modelTypes.RootSpan[]): Promise<number|string|void>;
}

/**
 * An interface that describes the possible events that will be emitted from a
 * Stats instance. Stats exporters should implement this interface.
 */
export interface StatsEventListener {
  /**
   * Is called whenever a new view is registered
   * @param view The registered view
   */
  onRegisterView(view: View): void;
  /**
   * Is called whenever a new measurement is recorded.
   * @param view The view related to the measurement
   * @param measurement The recorded measurement
   */
  onRecord(view: View, measurement: Measurement): void;
}

export type ExporterConfig = configTypes.BufferConfig;
