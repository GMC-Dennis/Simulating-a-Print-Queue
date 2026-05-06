
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow: No jobs to process");
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(name, pages) {
    const job = { name, pages };
    this.queue.enqueue(job);
    console.log(`Job added: ${name} (${pages} pages)`);
  }

  processJob() {
    if (this.queue.isEmpty()) {
      console.log("No jobs to process.");
      return;
    }

    const job = this.queue.dequeue();
    console.log(`Printing: ${job.name} (${job.pages} pages)`);
  }


  printQueue() {
    console.log("Current Print Queue:");
    this.queue.print();
  }
}

const printer = new PrinterQueue();

printer.addJob("Alice", 10);
printer.addJob("Bob", 5);
printer.addJob("Charlie", 12);
printer.addJob("David", 3);

printer.printQueue();

printer.processJob();
printer.processJob();

printer.printQueue();

printer.processJob();
printer.processJob();
printer.processJob(); 