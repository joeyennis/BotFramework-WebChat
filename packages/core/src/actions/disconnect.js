const DISCONNECT = 'DIRECT_LINE/DISCONNECT';
const DISCONNECT_PENDING = `${DISCONNECT}_PENDING`;
const DISCONNECT_REJECTED = `${DISCONNECT}_REJECTED`;
const DISCONNECT_FULFILLED = `${DISCONNECT}_FULFILLED`;

export default function disconnect() {
  return {
    type: DISCONNECT
  };
}

export { DISCONNECT, DISCONNECT_PENDING, DISCONNECT_REJECTED, DISCONNECT_FULFILLED };
