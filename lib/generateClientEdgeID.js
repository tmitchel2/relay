/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule generateClientEdgeID
 * 
 * @typechecks
 */

'use strict';

/**
 * Generate an edge client id for edges on connections based on the range it
 * belongs to and the node it contains.
 *
 * @internal
 */
function generateClientEdgeID(rangeID, nodeID) {
  return 'client:' + rangeID + ':' + nodeID;
}

module.exports = generateClientEdgeID;