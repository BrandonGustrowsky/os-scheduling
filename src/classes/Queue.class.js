
export class QueueDS {
    constructor(name){
        this.name = name
        this.processes = []
    }

    /**
     * 
     * @param process The process being added to the queue
     */
    enqueue(process) {
        process.isExecuting = false
        this.processes.push(process)
    }

    /**
     * 
     * @returns The process on the front of the queue
     */
    dequeue() {
        // Documentation on shift(): https://www.w3schools.com/js/js_array_methods.asp
        // this.processes[0].isExecuting = true
        return this.processes.shift()
    }

    /**
     * 
     * @returns The first element in the queue without removing it
     */
    peek() {
        return this.processes[0]
    }

    /**
     * @returns The length of the queue
     */
    length() {
        return this.processes.length;
    }
}